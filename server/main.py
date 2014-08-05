import logging
import json
import os

from google.appengine.api import users
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext import ndb


from lib import bottle
from lib.bottle import abort, post, get, request, error, debug, redirect, response, static_file

import source.rest
import source.routes


def main():
    debug(True)
    app = bottle.app()
    run_wsgi_app(app)

if __name__ == "__main__":
    main()
