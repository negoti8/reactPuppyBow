const baseUrl = "https://pups-n-stuff.fly.dev/api/puppies";

export async function fetchDogs() {
  try {
    const response = await fetch(baseUrl);
    const dogList = await response.json();
    return dogList;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSingleDog(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    const singleDog = await response.json();
    return singleDog;
  } catch (error) {
    console.error(error);
  }
}

export async function postDog(name, email) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    const createdDog = await response.json();
    return createdDog;
  } catch (error) {
    console.error(error);
  }
}
