import { getLocationByName } from "../location-util";

export async function GET(req, { params }) {
    const loccationData = getLocationByName(params?.name);

    return Response.json(loccationData);
}