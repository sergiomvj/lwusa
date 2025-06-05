import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Login real com Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/dash1");
  };

  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[#367588] text-center">Entrar na sua conta</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-md p-8">
        <div>
          <label className="block text-left mb-1 font-semibold text-[#367588]">E-mail</label>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            required
            autoFocus
          />
        </div>
        <div>
          <label className="block text-left mb-1 font-semibold text-[#367588]">Senha</label>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Sua senha"
            required
          />
        </div>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
        {/* Futuro: botão de login com Google */}
      </form>
      <div className="text-center mt-6">
        <span className="text-gray-600">Não tem conta?</span> {" "}
        <a href="/register" className="text-[#367588] font-semibold hover:underline">Cadastre-se</a>
      </div>
    </div>
  );
}
