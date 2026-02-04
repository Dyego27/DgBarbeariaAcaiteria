"use client";
import { EnvelopeSimple, Phone, Timer } from "phosphor-react";

export default function AdressAutocomplete() {
  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-8">Nossa Localização</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1 bg-purple-600 rounded-full" />
              <div>
                <p className="text-sm text-purple-400 uppercase">Rua</p>
                <p className="text-white">
                  R. Ten. Cícero Cavalcante de Ataíde
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-purple-600 rounded-full" />
              <div>
                <p className="text-sm text-purple-400 uppercase">Número</p>
                <p className="text-white">139</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-purple-600 rounded-full" />
              <div>
                <p className="text-sm text-purple-400 uppercase">
                  Bairro / Cidade
                </p>
                <p className="text-white">Mamanguape - PB</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-purple-600 rounded-full" />
              <div>
                <p className="text-sm text-purple-400 uppercase">CEP</p>
                <p className="text-white">58280-000</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps?q=R.+Ten.+Cícero+Cavalcante+de+Ataíde,+139,+Mamanguape+-+PB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg font-medium text-white"
          >
            Ver rota
          </a>
        </div>

        <div className="flex-1 h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126737.76031816199!2d-35.1661780609375!3d-6.943662427912326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad067853e974d3%3A0xddc2923926d51265!2sR.%20Ten.%20C%C3%ADcero%20Cavalcante%20de%20Ata%C3%ADde%2C%20139%2C%20Mamanguape%20-%20PB%2C%2058280-000!5e0!3m2!1spt-BR!2sbr!4v1770209805682!5m2!1spt-BR!2sbr"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h3 className="text-xl font-semibold mb-2">Visite-nos</h3>
        <p className="text-neutral-400 mb-10">
          Estamos localizados no coração de Mamanguape
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 rounded-xl p-6">
            <Timer size={24} />
            <p className="text-purple-500 mb-2">Horário de Funcionamento</p>
            <p>Seg - Sáb: 9:00 - 20:00</p>
            <p className="text-neutral-400">Domingo: Fechado</p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6">
            <Phone size={24} />
            <p className="text-purple-500 mb-2">Telefone</p>
            <p>(83) 993368237</p>
            <p className="text-neutral-400">Agende seu horário</p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6">
            <EnvelopeSimple />
            <p className="text-purple-500 mb-2">Email</p>
            <p>daniielgomes769@gmail.com</p>
            <p className="text-neutral-400">Entre em contato</p>
          </div>
        </div>
      </div>
    </section>
  );
}
