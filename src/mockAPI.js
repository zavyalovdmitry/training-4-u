const API = process.env.REACT_APP_API;

const HEADERS = {
  'Content-Type': 'application/json;charset=utf-8',
};

export const subjectsAndTests = async (endPoint) => {
  try {
    const response = await fetch(`${API}/${endPoint}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const levelsData = async () => {
  try {
    const response = await fetch(`${API}/Levels`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};
