import config from '../config';
import queryString from 'query-string';

const {
  api: {
    seed,
    baseUrl,
    user: { fields: userFields, allowedParams: getUserParams },
  },
} = config;

const getUsers = async (options) => {
  const defaultOptions = {
    page: options.page,
    seed,
    results: 10,
    inc: userFieldsToString(),
  };

  const queryParamString = queryString.stringify(defaultOptions, {
    arrayFormat: 'comma',
  });
  return fetch(`${baseUrl}?${queryParamString}`).then((result) =>
    result.json()
  );
};

//велосипед
const userFieldsToString = () => {
  let userFieldsString = '';
  userFields.forEach((value, index) => {
    if (index === userFields.length - 1) {
      userFieldsString += value;
    } else {
      userFieldsString += value + ',';
    }
  });
  return userFieldsString;
};

export default getUsers;
