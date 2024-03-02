const app = require('./src/app');
require('./src/database');

app.listen(app.get('default_port'), function() {
    console.log(`Listening on port ${app.get('default_port')}`);
});