

export class Cab{
    
    cabId!: number;
    carType!: carType;
    perKmRate!: number;
    filter(arg0: (u: any) => boolean): Cab {
        throw new Error('Method not implemented.');

    }  }
    enum carType{
        Alto, Etios, Indigo, Santro, Sedan, SwiftDzire
    }
