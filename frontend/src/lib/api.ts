export async function createShortLink(original_url: string) {
    const response = await fetch("http://localhost:8000/links/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ original_url }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to create short link");
    }
  
    return response.json();
  }
  
  export async function getLinkInfo(short_key: string) {
    const response = await fetch(`http://localhost:8000/links/${short_key}`);
  
    if (!response.ok) {
      throw new Error("Failed to fetch link info");
    }
  
    return response.json();
  }
  