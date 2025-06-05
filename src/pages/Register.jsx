import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { supabase } from "../lib/supabaseClient";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    whatsapp: "",
    endereco: "",
    cidade: "",
    cep: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Cadastro real com Supabase Auth
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.senha
    });
    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }
    const userId = data?.user?.id;

    // Salvar dados extras na tabela 'profiles'
    const { error: profileError } = await supabase.from("profiles").upsert({
      id: userId,
      free: true,
      qualify: false
    });
    if (profileError) {
      setError("Erro ao salvar perfil: " + profileError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/dash1");
  };

  return (
    <div className="max-w-md mx-auto pt-32 pb-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[#367588] text-center">Crie sua conta</h1>
      <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-lg shadow-md p-8">
        <div>
          <label className="block text-left mb-1 font-semibold text-[#367588]">Nome</label>
          <Input name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome completo" required />
        </div>
        <div>
          <label className="block text-left mb-1 font-semibold text-[#367588]">E-mail</label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Seu e-mail" required />
        </div>
        <div>
          <label className="block text-left mb-1 font-semibold text-[#367588]">Senha</label>
          <Input type="password" name="senha" value={form.senha} onChange={handleChange} placeholder="Crie uma senha" required minLength={6} />
        </div>
        <div>
          <label className="block text-left mb-1 font-semibold text-[#367588]">Whatsapp</label>
          <Input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="(99) 99999-9999" required />
        </div>
        <div>
          <label className="block text-left mb-1 font-semibold text-[#367588]">Endereço</label>
          <Input name="endereco" value={form.endereco} onChange={handleChange} placeholder="Rua, número, complemento" required />
        </div>
        <div>
          <label className="block text-left mb-1 font-semibold text-[#367588]">Cidade</label>
          <Input name="cidade" value={form.cidade} onChange={handleChange} placeholder="Sua cidade" required />
        </div>
        <div>
          <label className="block text-left mb-1 font-semibold text-[#367588]">CEP</label>
          <Input name="cep" value={form.cep} onChange={handleChange} placeholder="00000-000" required />
        </div>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
        <Button type="button" className="w-full mt-2 bg-white border border-gray-300 text-[#367588] hover:bg-gray-50" disabled>
          <img src="/images/google.svg" alt="Google" className="inline-block w-5 h-5 mr-2 align-middle" /> Entrar com Google (em breve)
        </Button>
      </form>
      <div className="text-center mt-6">
        <span className="text-gray-600">Já tem conta?</span> {" "}
        <a href="/login" className="text-[#367588] font-semibold hover:underline">Entrar</a>
      </div>
    </div>
  );
}
