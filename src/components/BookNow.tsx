"use client";

import { useState } from "react";
import { Calendar, Phone, User } from "phosphor-react";
import emailjs from "@emailjs/browser";

export default function BookNow() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    date?: string;
  }>({});

  function validate() {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Esse campo é obrigatório";
    if (!phone.trim()) newErrors.phone = "Esse campo é obrigatório";
    if (!date) newErrors.date = "Esse campo é obrigatório";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    emailjs
      .send(
        "service_9u05zfu",
        "template_tuduv8a",
        { name, phone, date, description },
        "2jXtkKX3sbuUoAz5C",
      )
      .then(() => {
        alert("Agendamento enviado!");
        setName("");
        setPhone("");
        setDate("");
        setDescription("");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section
      className="
        relative min-h-screen
        flex items-start sm:items-center
        justify-center
        px-3 sm:px-6
        py-16 sm:py-24
      "
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-zinc-200 to-zinc-400" />

      {/* FORM */}
      <div
        className="
          relative z-10
          w-full
          sm:max-w-lg
          bg-zinc-900/85 backdrop-blur-xl
          border border-amber-500/30
          rounded-xl sm:rounded-2xl
          shadow-xl
          p-5 sm:p-8
        "
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-white">
          Agende seu <br />
          <span className="text-amber-500">Horário</span>
        </h2>

        <p className="text-center text-zinc-400 mt-2 text-sm">
          Preencha os dados abaixo para reservar seu corte.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Nome */}
          <div>
            <label className="text-xs text-zinc-400">Nome *</label>
            <div className="relative mt-1">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500"
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Telefone */}
          <div>
            <label className="text-xs text-zinc-400">Telefone *</label>
            <div className="relative mt-1">
              <Phone
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(83) 99999-9999"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Data */}
          <div>
            <label className="text-xs text-zinc-400">Data *</label>
            <div className="relative mt-1">
              <Calendar
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="text-xs text-zinc-400">Descrição</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Diga como quer o seu corte..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
            />
          </div>

          <button
            disabled={loading}
            className="
              w-full mt-3
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-black font-semibold py-3 rounded-lg
              transition hover:opacity-90
            "
          >
            {loading ? "Enviando..." : "Agendar Horário"}
          </button>
        </form>
      </div>
    </section>
  );
}
