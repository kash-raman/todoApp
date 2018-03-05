# todoApp
poc - angularjs project
Prerequisite: 
minikube
docker 
node 

Step 1: 

npm install
npm start

go to http://localhost:9000/ 

Expected: confirm the application is coming up.

Step 2: 
Docker :
create a docker account in dockerhub. 
docker build -t krangan/todo-web-app:latest .
  docker push krangan/todo-web-app


Step 3:
Kubernates: 
setup kubectl and minikube if local

Use yml to setup cluster and ping url. 

kubectl create -f k8-deploy-todo.yml
kubectl create -f k8-service-todo.yml

minikube service todo-app --url
curl $(minikube service todo-app --url)

Todo:
1. Try loadbalance, print pod,node name.
2. parameterize and reduce the app-name
3. enhanse app  wit multiple backend service deployment




