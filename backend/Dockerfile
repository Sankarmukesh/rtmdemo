FROM python:3.8-slim-buster
RUN apt-get update && apt-get install -y python3-pip python3-setuptools python3-dev libcurl4-openssl-dev libssl-dev xvfb
RUN apt-get install curl
RUN apt-get install apt-transport-https
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list | tee /etc/apt/sources.list.d/msprod.list
RUN apt-get update
ENV ACCEPT_EULA=y DEBIAN_FRONTEND=noninteractive
RUN apt-get install mssql-tools unixodbc-dev -y
RUN pip install pyodbc
RUN pip install python-dotenv
RUN pip install --upgrade pip
RUN apt-get -y install xmlsec1
RUN apt-get -y install libxmlsec1-dev
RUN apt-get -y install pkg-config
RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt install -y libxrender1 libxext6
RUN apt-get install -y libfontconfig1
RUN wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.3/wkhtmltox-0.12.3_linux-generic-amd64.tar.xz
RUN tar xf  wkhtmltox-0.12.3_linux-generic-amd64.tar.xz
RUN mv wkhtmltox/bin/wkhtmltopdf /usr/local/bin/
RUN mv wkhtmltox/bin/wkhtmltoimage /usr/local/bin/
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
COPY . /app/
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
EXPOSE 9001
ENTRYPOINT python3 manage.py runserver 0.0.0.0:9001
