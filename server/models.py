import logging

from google.appengine.ext import ndb


class Comment(ndb.Model):
    created = ndb.DateTimeProperty(auto_now_add=True)
    comment = ndb.StringProperty()
    commentAuthor = ndb.StringProperty()

def comment_to_json(comment):
    return {
        'key': comment.key.urlsafe(),
        'created': str(comment.created),
        'comment': comment.comment,
        'commentAuthor': comment.commentAuthor
    }