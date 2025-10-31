export async function fetchORCIDPublications(orcidId) {
  try {
    const response = await fetch(
      `https://pub.orcid.org/v3.0/${orcidId}/works`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch ORCID data");
    }

    const data = await response.json();
    return data.group || [];
  } catch (error) {
    console.error("Error fetching ORCID publications:", error);
    return [];
  }
}
