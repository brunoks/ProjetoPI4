using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace MeuProjeto.Hubs
{
    public class Contador {
        public static int valor;
    }
    public class ContadorHub : Hub
    {

        public async Task GetContador() {
            await Clients.Caller.SendAsync("getContador",Contador.valor);
        }

        public async Task BroadcastContador() {
            await Clients.All.SendAsync("broadcastContador", Contador.valor);
        }

        public async Task SomaContador() {
            Contador.valor++;
            await BroadcastContador();
        }
    }
}
