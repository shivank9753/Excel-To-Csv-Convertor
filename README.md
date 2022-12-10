# Excel file to CSV convertor using spring boot

#creating the docker image :
docker build . --tag ExcelCsvConvertor


#build project jar usinmg maven :
mvn clean install


#Run the container :
docker container run -P -v $(pwd)/Backend/csvoutput:/csvOutput excel-csv-convertor


#get container_id and copy it :
docker ps

#move the jar from host to container :
docker cp [jar_path_in_host_fs] [container_id]:/

#open the container terminal :
docker exec -it [container_id] bash


#run the spring boot jar inside container :
java -jar /spring.boot.csv.learn-1.0.0.jar

Now hit the api with assigned binded port on host 






