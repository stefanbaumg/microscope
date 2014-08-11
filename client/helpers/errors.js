// Local (client-only) collection
// it's local because it's in the "client" folder
Errors = new Meteor.Collection(null);

throwError = function(message) {
    Errors.insert({
        message: message,
        seen: false
    });
};

clearErrors = function() {
    Errors.remove({
        seen: true
    });
};
