import json
import logging

from lib.bottle import get, post, request, response

import models

@get('/comments/')
def get_all_comments():
    logging.info("Getting matches!")
    comments = models.Comment.query().order(models.Comment.created).fetch(100)
    to_return = [models.comment_to_json(comment) for comment in comments]
    response.content_type = 'application/json'
    return json.dumps(to_return)


@post('/comment')
def create_new_comment():
    data = json.loads(request.json)
    comment = models.Comment(
        comment = data.get('comment'),
        commentAuthor = data.get('commentAuthor')
    )
    comment.put()
    response.content_type = 'application/json'
    return models.comment_to_json(comment)
