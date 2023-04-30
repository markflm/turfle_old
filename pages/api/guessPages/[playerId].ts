export default function handler(req: any, res: any) {
  const { method, query } = req; //method is GET, POST, PUT, PATCH, etc

  //if this is a get, ask pocketbase if the potd value on this request's playerId is = to today's potd
  //how do we know today's potd? tbd

  console.log(query);
  res.status(200).json("hello");
}
