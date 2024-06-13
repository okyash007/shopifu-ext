export async function getad(tailboost_app_id, user_agent) {
  console.log(
    `https://staging-tintin.tailboost.ai/adRequest/?tailboost_app_id=${tailboost_app_id}&tailboost_user_id=tailboost_user_34f10379-d31c-4&user_agent=${user_agent}`
  );
  console.log(tailboost_app_id);
  const response = await fetch(
    `https://staging-tintin.tailboost.ai/adRequest/?tailboost_app_id=${tailboost_app_id}&tailboost_user_id=tailboost_user_34f10379-d31c-4&user_agent=${user_agent}`,
    {
      headers: {
        Accept: "text/html",
      },
    }
  );

  const htmlContent = await response.text();
  

  return htmlContent;
}
