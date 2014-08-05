import logging

import models

from lib import bottle
from lib.bottle import get, static_file

from google.appengine.api import users

@get('/')
def display_home():
    return static_file('index.html', root='./')


