export const humanize = (text) => {
    return text
        .replace(/_/g, " ") // Convert underscores to spaces
        .replace(/([a-z])([A-Z])/g, "$1 $2") // Split camelCase
        .replace(/\b(?:id|url|api)\b/gi, (match) => match.toUpperCase()) // Keep special words uppercase
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letters
        .trim();
};
