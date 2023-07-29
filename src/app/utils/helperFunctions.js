export function convertToCamelCase(input) {
  let words = input.replace(/_/g, " ").split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  let result = words.join(" ");

  return result;
}

export function formatURL(url) {
  try {
    if (!/^https?:|http?:\/\//i.test(url)) {
      url = "https://" + url;
    }
    // Attempt to format the URL
    const urlObj = new URL(url);
    console.log(urlObj);
    // If it doesn't have a scheme, add "https://"
    if (!urlObj.protocol.startsWith("http")) {
      urlObj.protocol = "https:";
    }

    // If it doesn't contain the subdomain "www.", add it
    if (!urlObj.hostname.startsWith("www.")) {
      urlObj.hostname = "www." + urlObj.hostname;
    }

    // Return the formatted URL
    const formattedURL = urlObj.href;

    // Validate if the formatted URL is valid
    return formattedURL;
  } catch (error) {
    // If the URL is not valid or there's an error, return false
    return error;
  }
}

export function isValidURL(url) {
  // Regular expression pattern to validate a basic URL
  const urlPattern =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

  return urlPattern.test(url);
}

export function formatTimeSeconds(time) {
  if (time == 0) {
    return "0";
  } else if (time >= 1000) {
    const seconds = time / 1000;
    return `${seconds.toFixed(1)} s`;
  } else {
    return `${time} ms`;
  }
}

export function getClassByRange(time, range) {
  const classes = {
    0: "approved",
    1: "warning",
    2: "error",
  };

  if (range?.length) {
    for (let index = 0; index < range.length; index++) {
      if (time <= range[index]) {
        return classes[index];
      }
    }
  }
}
