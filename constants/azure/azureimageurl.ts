export const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;

export const CONTAINERS = {
  userprofile: process.env.APP_ENV === 'local' ? 'testprofileimgs' : 'profileimgs',
  subimgs: process.env.APP_ENV === 'local' ? 'testsubimgs' : 'subimgs',
  eventimgs: process.env.APP_ENV === 'local' ? 'testeventimgs' : 'eventimgs',
  formimgs: process.env.APP_ENV === 'local' ? 'testformimgs' : 'formimgs',
};

export const DEFAULT_IMAGES = {
  userprofile: 'https://ezeventstorage.blob.core.windows.net/testprofileimgs/default_thumnail.png',
  event: 'https://ezeventstorage.blob.core.windows.net/testprofileimgs/default_event.png',
  event_thumbnail: 'https://ezeventstorage.blob.core.windows.net/testprofileimgs/default_thumnail.png',
  event_banner: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/AEF6/production/_126709744_c66798edc6ea30838d4af96c1060a8cce4ab180f-1.jpg.webp',
};

export const IMAGE_URLS = {
  userprofile: "https://ezeventstorage.blob.core.windows.net" + '/' + (process.env.APP_ENV === 'local' ? 'testprofileimgs' : 'testprofileimgs'),
  subimgs: "https://ezeventstorage.blob.core.windows.net" + '/' + (process.env.APP_ENV === 'local' ? 'testsubimgs' : 'testsubimgs'),
  eventimgs: "https://ezeventstorage.blob.core.windows.net" + '/' + (process.env.APP_ENV === 'local' ? 'testeventimgs' : 'testeventimgs'),
  formimgs: "https://ezeventstorage.blob.core.windows.net" + '/' + (process.env.APP_ENV === 'local' ? 'testformimgs' : 'testformimgs'),
};

export const AZURE_STORAGE_BASE_URL = "https://ezeventstorage.blob.core.windows.net";

export const ACCOUNT_KEY = process.env.AZURE_SAS_TOKEN;

export const CONNECTION_STRING = process.env.AZURE_ACCOUNT_CONNECT_STRING;

export const BLOB_URL = process.env.AZURE_BLOB_SAS_URL;

export const FILE_URL = process.env.AZURE_FILE_SAS_URL;
