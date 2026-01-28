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

    if (!name.trim()) {
      newErrors.name = "Esse campo é obrigatório";
    }

    if (!phone.trim()) {
      newErrors.phone = "Esse campo é obrigatório";
    } else if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(phone)) {
      newErrors.phone = "Número de celular inválido";
    }

    if (!date) {
      newErrors.date = "Esse campo é obrigatório";
    }

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
        {
          name,
          phone,
          date,
          description: description || "Não informado",
        },
        "2jXtkKX3sbuUoAz5C",
      )
      .then(() => {
        alert("Agendamento enviado com sucesso!");
        setName("");
        setPhone("");
        setDate("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Erro EmailJS:", error);
        alert("Erro ao enviar o agendamento. Tente novamente.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="py-28 px-6 flex justify-center items-center relative overflow-hidden">
      {/* FUNDO ORIGINAL (mantido) */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 via-purple-200/60 to-zinc-400" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-xl bg-zinc-900/80 backdrop-blur-xl border border-purple-800/30 rounded-2xl shadow-2xl shadow-purple-900/40 p-8">
        <h2 className="text-4xl font-bold text-center text-white">
          Agende seu <br />
          <span className="text-purple-500">Horário</span>
        </h2>

        <p className="text-center text-zinc-400 mt-4 text-sm">
          Preencha os dados abaixo para reservar seu corte.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Nome */}
          <div>
            <label className="text-sm text-zinc-300">Nome *</label>
            <div className="relative mt-2">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500"
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className={`w-full bg-zinc-950 border rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition ${
                  errors.name
                    ? "border-red-500"
                    : "border-zinc-800 focus:border-purple-600"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label className="text-sm text-zinc-300">Telefone *</label>
            <div className="relative mt-2">
              <Phone
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(83) 111111111"
                className={`w-full bg-zinc-950 border rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition ${
                  errors.phone
                    ? "border-red-500"
                    : "border-zinc-800 focus:border-purple-600"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Data */}
          <div>
            <label className="text-sm text-zinc-300">Data *</label>
            <div className="relative mt-2">
              <Calendar
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full bg-zinc-950 border rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition ${
                  errors.date
                    ? "border-red-500"
                    : "border-zinc-800 focus:border-purple-600"
                }`}
              />
            </div>
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          {/* Descrição */}
          <div>
            <label className="text-sm text-zinc-300">Descrição</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Diga como quer o seu corte ou alguma observação..."
              className="w-full mt-2 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-600 resize-none"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-700 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-800/40"
          >
            {loading ? "Enviando..." : "Agendar Horário"}
          </button>
        </form>
      </div>
    </section>
  );
}
