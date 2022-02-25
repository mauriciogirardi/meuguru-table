import { UniversitiesProps } from "../types";
import { Service } from "./Service";

export class UniversitiesService extends Service {
    static getAllUniversities() {
        return this.Http
            .get<UniversitiesProps[]>('/university')
            .then(this.getDate)
    }
}
