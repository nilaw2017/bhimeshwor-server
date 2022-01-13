module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "ebyapar",
        api_key: "258363498999273",
        api_secret: "uMhoR5TxChqiugBqPziHJ2rhluA",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
