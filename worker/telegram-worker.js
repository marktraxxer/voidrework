/* ============================================================
   Voidrework — приёмник заявок (Cloudflare Worker, бесплатно)
   ============================================================
   Что делает: принимает POST-запрос с сайта (JSON) и отправляет
   заявку тебе в Telegram через Bot API.

   Переменные окружения (Settings -> Variables and Secrets):
     BOT_TOKEN  — токен бота от @BotFather
     CHAT_ID    — куда присылать заявки (твой id или id канала)

   Подробная инструкция по установке: worker/README.md
============================================================ */

const LABELS = {
  type: "Тип",
  name: "Имя",
  telegram: "Telegram",
  platform: "Платформа",
  details: "Описание",
  topic: "Тема",
  comment: "Комментарий",
  items: "Товары",
  total: "Сумма",
  budget: "Бюджет",
  lang: "Язык",
  site: "Страница"
};

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status,
    headers: Object.assign({ "Content-Type": "application/json" }, CORS)
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }
    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405);
    }

    let data;
    try {
      data = await request.json();
    } catch (e) {
      return json({ ok: false, error: "Bad JSON" }, 400);
    }

    if (!env.BOT_TOKEN || !env.CHAT_ID) {
      return json({ ok: false, error: "BOT_TOKEN or CHAT_ID is not set" }, 500);
    }

    const lines = ["\uD83C\uDD95 \u0417\u0430\u044F\u0432\u043A\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 Voidrework", ""];
    Object.keys(data).forEach(function (key) {
      const value = data[key];
      if (value === undefined || value === null || String(value).trim() === "") return;
      lines.push((LABELS[key] || key) + ": " + value);
    });

    const tgRes = await fetch(
      "https://api.telegram.org/bot" + env.BOT_TOKEN + "/sendMessage",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.CHAT_ID,
          text: lines.join("\n"),
          disable_web_page_preview: true
        })
      }
    );

    if (!tgRes.ok) {
      const detail = await tgRes.text();
      return json({ ok: false, error: "Telegram error", detail: detail }, 502);
    }

    return json({ ok: true }, 200);
  }
};
