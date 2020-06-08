// for development
// const host = "http://0.0.0.0:5000";

// for server
const host = "";


const url = host + "/api/v1/";

const constants = {
  // 'socket_url': "http://0.0.0.0:5001",
  'socket_url': "",
  'updateflow': url + "updateflow",
  'test': url + "test",
  'channel': url + "channel",
  'manage_images': url + "manage_images",
  'enterprise': url + "enterprise",
  'bots': url + "bots",
  'allbots': url + "allbots",
  'templates': url + "templates",
  'users': url + "users",
  'redirect': url+"redirect_test",
  'untitled_templates': url+"untitled_templates",
  'untitled_bots': url+"untitled_bots",
  'application_name': "Ngage",
  'fbAppId': '186459405370116', //girigowda account
  'fbWebHook': 'ngage',
  'fbVerifyToken': 'squirrel',
  'fbAppSecret': 'd29898a8d6ee7ef5273ffdfddc235d6e'
};

export default constants;
