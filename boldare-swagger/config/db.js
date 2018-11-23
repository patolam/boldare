var fs = require('fs');
const path = require("path");

module.exports = function () {
  return {
    user: JSON.parse(fs.readFileSync(path.resolve(__dirname, '../api/mocks/user.json'))),
    profile: JSON.parse(fs.readFileSync(path.resolve(__dirname, '../api/mocks/profile.json'))),

    getUser() {
      return this.user;
    },

    updateFollow(value) {
      if (this.user) {
        this.user.followed = value === 'true' ? true : false;

        if (this.user.followed) {
          this.profile.stats.followers++;
        } else {
          this.profile.stats.followers--;
        }

        return this.user;
      } else {
        return null;
      }
    },

    updateLike(value) {
      if (this.user) {
        this.user.liked = value === 'true' ? true : false;

        if (this.user.liked) {
          this.profile.stats.likes++;
        } else {
          this.profile.stats.likes--;
        }

        return this.user;
      } else {
        return null;
      }
    },

    getProfile() {
      this.sortComments();
      return this.profile;
    },

    addComment(comment) {
      if (this.profile) {
        this.profile.comments.push(comment);
        this.sortComments();
        return this.profile.comments;
      } else {
        return null;
      }
    },

    sortComments() {
      this.profile.comments.sort((a, b) => {
        return a.date - b.date;
      });
    }

  }
};
