import Host from '../vdom/host';
import ServerDriver from '../drivers/server';
import render from '../render';
import Serializer from './serializer';

export default function renderToString(element) {
  // Reset driver iternal state
  ServerDriver.nodeMaps = {};
  ServerDriver.nodeCounter = 0;
  Host.driver = ServerDriver;
  // Reset host state
  Host.roots = {};
  Host.mountID = 1;
  let body = ServerDriver.createBody();
  render(element, body);
  return new Serializer(body).serialize();
}