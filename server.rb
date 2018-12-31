require "sinatra"
require 'json'
require 'pry'
require "sinatra/json"

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")

def tasks
  file = File.read("tasks.json")
  JSON.parse(file)
end

def new_task_id
  tasks["tasks"].last["id"] + 1
end

def write_to_json_file(task)
  # wherein we take a new task from POST, add it to our tasks json with a correct id, and persist our information.
  binding.pry

  new_task = {
    id: new_task_id,
    name: task["name"],
    assignee: task["assignee"]
  }

  new_tasks = {
    tasks: tasks["tasks"].concat([new_task])
  }

  json_tasks = JSON.pretty_generate(new_tasks, indent: '  ')
  File.write("tasks.json", json_tasks)
end

get "/api/v1/tasks" do
  content_type :json
  status 200
  tasks.to_json
end

post "/api/v1/tasks" do
  # Put a pry here to look at request.body.read and see what you're getting from React
  # or just to check to make sure you're making it to the server!
  json = JSON.parse(request.body.read)

  if json["task"]
    # Put a pry here to see if your criterion is being met
    # Don't forget to look at your json file to see if you're storing the data the way you expect!
    write_to_json_file(json["task"])
    content_type :json
    status 200
    tasks.to_json
  else
    status 500
    { error: "Oops, something bad happened yo" }.to_json
  end
end

get "/" do
  erb :index
end
