/*Meteor.startup(function() {
    Deps.autorun(function() {
        console.log('There are ' + Posts.find().count() + ' posts');
    });

    Posts.find().observe({
        added: function(post) {
            console.log('Added post ' + post.title);
        },
        changed: function(post) {
            console.log('Changed post ' + post.title);
        }
    });
});
*/
