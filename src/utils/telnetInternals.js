export const telnetCodes = {
  // Negotiation Bytes
  IAC: 255,
  DONT: 254,
  DO: 253,
  WONT: 252,
  WILL: 251,
  SB: 250,
  SE: 240,

  IS: 0,

  // END-OF-RECORD Marker / GO-AHEAD
  EORc: 239,
  GA: 249,

  // TELNET Options
  BINARY: 0,
  ECHO: 1,
  SUPGA: 3,
  STATUS: 5,
  SENDLOC: 23,
  TTYPE: 24,
  EOR: 25,
  NAWS: 31,
  TSPEED: 32,
  RFLOW: 33,
  LINEMODE: 34,
  AUTH: 35,
  NEWENV: 39,
  CHARSET: 42,
  MSDP: 69,
  MSSP: 70,
  COMPRESS: 85,
  COMPRESSv2: 86,
  MSP: 90,
  MXP: 91,
  ZMP: 93,
  CONQUEST: 94,
  ATCP: 200,
  GMCP: 201,
};

export const codes = {
  CR: 10,
  LF: 13,
};
