############################################################
# Dockerfile to build Flask App
# Based on
############################################################

# Set the base image
FROM debian:latest

# File Author / Maintainer
MAINTAINER Carlos Tighe

RUN apt-get update && apt-get install -y apache2 \
    libapache2-mod-wsgi-py3 \
    build-essential \
    python3 \
    python3-dev\
    python3-pip \
    vim \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*

# Copy over and install the requirements
COPY ./app/requirements.txt /var/www/Orwell/app/requirements.txt
RUN pip install -r /var/www/Orwell/app/requirements.txt

# Copy over the apache configuration file and enable the site
COPY ./Orwell.conf /etc/apache2/sites-available/Orwell.conf
RUN a2ensite Orwell
RUN a2enmod headers

# Copy over the wsgi file
COPY ./Orwell.wsgi /var/www/Orwell/Orwell.wsgi

COPY ./run.py /var/www/Orwell/run.py
COPY ./app /var/www/Orwell/app/

RUN a2dissite 000-default.conf
RUN a2ensite Orwell.conf

EXPOSE 80

WORKDIR /var/www/Orwell

# CMD ["/bin/bash"]
CMD  /usr/sbin/apache2ctl -D FOREGROUND
# The commands below get apache running but there are issues accessing it online
# The port is only available if you go to another port first
# ENTRYPOINT ["/sbin/init"]
# CMD ["/usr/sbin/apache2ctl"]
