FROM httpd:2.4
USER root
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk && \
    apt-get install -y ant && \
    apt-get clean;
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-arm64
ENV PATH $PATH:$JAVA_HOME/bin
RUN export JAVA_HOME