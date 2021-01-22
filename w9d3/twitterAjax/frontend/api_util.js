const APIUtil = {
    followUser: id => {
        return $.ajax({
            method: "POST",
            url: `/users/${id}/follow`, // use string interpolation to add the userID to our path
            dataType: "JSON"
        });
    },
  
    unfollowUser: id => {
        return $.ajax({
            method: "DELETE",
            url: `/users/${id}/follow`, // use string interpolation to add the userID to our path
            dataType: "JSON"
        });
    }

    searchUsers: queryVal => {
        return $.ajax({
            method: "GET",
            url: "/users/search",
            data: {},
            dataType: "JSON"
        })
    }
};

  
  module.exports = APIUtil;