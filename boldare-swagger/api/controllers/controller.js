'use strict';

var db = require('../../config/db')();

module.exports = {
  getUser: getUser,
  updateFollow: updateFollow,
  updateLike: updateLike,

  getProfile: getProfile,
  addComment: addComment
};

function getUser(req, res) {
  res.json(db.getUser());
}

function updateFollow(req, res) {
  let follow = req.swagger.params.follow.value;

  const updated = db.updateFollow(follow);

  if (updated !== null) {
    res.json(updated);
  } else {
    res.status(204).send();
  }
}

function updateLike(req, res) {
  let like = req.swagger.params.like.value;

  const updated = db.updateLike(like);

  if (updated !== null) {
    res.json(updated);
  } else {
    res.status(204).send();
  }
}

function getProfile(req, res) {
  res.json(db.getProfile());
}

function addComment(req, res) {
  let comment = req.swagger.params.comment.value;

  res.json(db.addComment(comment));
}
