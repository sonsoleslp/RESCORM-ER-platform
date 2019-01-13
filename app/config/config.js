 export let GLOBAL_CONFIG = {
  dev:{...{
    title: "Quiz",
    primaryColor: "#e84100",
    primaryColorText: "#ffffff",
    secondaryColor: "#333333",
    secondaryColorText: "#ffffff",
    backgroundColor: "#ffffff",
    generalTextColor: '#000000',
    logo: undefined,
    moodleXmlPath: undefined,
    feedback: true,
    randomQuestions: true,
    debug:true,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["en", "es"],
    // locale: "es",
    adaptive:false,
    finish_screen:true,
    scorm:{
      completion_threshold: window.config && window.config.threshold ?  (window.config.threshold / 100):0.5,
      score_threshold: window.config && window.config.threshold ?  (window.config.threshold / 100):0.5,
    },
    n:5,
  },...window.config},
  production:{...{
    title: "Quiz",
    primaryColor: "#e84100",
    primaryColorText: "#ffffff",
    secondaryColor: "#333333",
    secondaryColorText: "#ffffff",
    backgroundColor: "#ffffff",
    generalTextColor: '#000000',
    logo: undefined,
    moodleXmlPath: undefined,
    feedback: true,
    randomQuestions: true,
    debug:false,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["en", "es"],
    adaptive:false,
    finish_screen:true,
    scorm:{
      completion_threshold: window.config && window.config.threshold ?  (window.config.threshold / 100):0.5,
      score_threshold: window.config && window.config.threshold ?  (window.config.threshold / 100):0.5,
    },
    n:5,
  },...window.config},
};

let processConfig = (function(){
  let env = process.env.NODE_ENV || 'dev';
  if(typeof GLOBAL_CONFIG[env] === "undefined"){
    env = "dev";
  }
  GLOBAL_CONFIG = GLOBAL_CONFIG[env];

  GLOBAL_CONFIG.debug_scorm_api = ((GLOBAL_CONFIG.debug) && (GLOBAL_CONFIG.debug_scorm_api));
  GLOBAL_CONFIG.debug_scorm_api_window = ((GLOBAL_CONFIG.debug_scorm_api) && (GLOBAL_CONFIG.debug_scorm_api_window));
})();