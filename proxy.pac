function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();

    return "PROXY 10.36.200.107:8888; DIRECT";
}