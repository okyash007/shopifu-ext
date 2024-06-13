export async function updateApp(shop, data) {
  const updatedShopRes = await fetch(
    `https://registerapp.tailboost.ai/app/update/${shop}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const updatedShop = await updatedShopRes.json();
  return updatedShop;
}

export async function getApp(shop) {
  const appRes = await fetch(`https://registerapp.tailboost.ai/app/${shop}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const app = await appRes.json();
  return app;
}
