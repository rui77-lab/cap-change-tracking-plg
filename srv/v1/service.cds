using {MyEntity} from '../../db/db';


service MyService {

    entity SMyEntity as projection on MyEntity;


    annotate SMyEntity {
        ID   @changelog;
        name @changelog;
    }

}
