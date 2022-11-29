import React from "react";

import "./styles.css"

export default function Logon() {
    return (
        <div className="container mx-auto w-full max-w-xl m-3 flex justify-center h-screen items-center">
            <form className="bg-LightGrey shadow-sm rounded px-8 pt-6 pb-8 mb-4 relative" action="">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Usuário:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nome de usuário" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Senha:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Senha" />
                    <p className="text-red-500 text-xs italic">Escolha uma senha.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button class="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Button
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Esqueceu sua senha?
                    </a>
                </div>
            </form>
        </div>
    )
}