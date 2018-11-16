using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace MeuProjeto.Hubs
{

    public class ChatHub : Hub
    {
        public void Echo(string message)
        { 
            //you're going to configure your client app to listen for this
            Clients.All.SendAsync("Send", message);
        }
    }
}
