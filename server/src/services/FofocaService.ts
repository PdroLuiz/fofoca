import { Fofoca, IFofocaConstructor } from "../entity/Fofoca";

export function getRandom(qtRecords = 1) {
    return Fofoca.getRepository().aggregateEntity([{
        $sample: {
            size: qtRecords,
        }
    }, {
        $project: {
            userIp: 0
        }
    }]).toArray();
}


export async function create({text, userIp} : IFofocaConstructor = {}) : Promise<Fofoca> {
    const fofoca = new Fofoca({text, userIp});
    const fofoca_ = await Fofoca.getRepository().save(fofoca);
    fofoca_.userIp = undefined;
    return fofoca_;
}

export async function deleteFromIp(userIp : string) {
    return Fofoca.getRepository().deleteMany({userIp});    
}