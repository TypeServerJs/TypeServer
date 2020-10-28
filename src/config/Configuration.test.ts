import { Configuration } from './Configuration';

const obj1 = {
    key1: 'value1',
    key2: 'value2',
    key3: {
        key1: 'value in key3',
        key2: 'Origin'
    },
    key4: 10
};

const obj1_update = {
    key2: 'UPDATED_VALUE 2',
    key3: {
        key2: "UPDATED_VALUE"
    },
    key4: 11
};

const obj1_second_update = {
    key2: 'UPDATED_VALUE 3',
};


test('Configuration tests', () => {

    const config = Configuration.fromObject(obj1);
    const configUpdate = Configuration.fromObject(obj1_update);
    const configUpdate2 = Configuration.fromObject(obj1_second_update);

    config.sync(configUpdate);
    config.sync(configUpdate2);

    expect(config.get('key2')).toBe('UPDATED_VALUE 3');
    expect(config.get('key3:key1')).toBe('value in key3');
    expect(config.get('key3:key2')).toBe('UPDATED_VALUE');
    expect(config.getInt('key4')).toBe(11);
    expect(config.get('key_not_exists', 'defaultValue')).toBe('defaultValue');

});