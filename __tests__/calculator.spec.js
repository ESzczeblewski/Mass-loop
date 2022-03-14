/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import Calculator from '@/components/Calculator.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(Calculator, {
    data() {
      return {
        calcActive: false,
        containers: 20,
        singleCost: 20,
      }
    },
    global: {
      mocks: {
        $t: (msg) => msg
      }
    }
  });
});

describe('Calculator.vue', () => {
  it('renders props.msg when passed', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('activates input on click', async () => {
    expect(wrapper.vm.calcActive).toBe(false);

    await wrapper.find('input').trigger('click');

    expect(wrapper.vm.calcActive).toBe(true);
  });

  it('calculates savings', async () => {
    expect(wrapper.find('h4 span').text()).toBe('3840');

    await wrapper.setData({
      containers: 30,
      singleCost: 10
    });

    expect(wrapper.find('h4 span').text()).toBe('2880');
  });

  it('adds active class on input click', async () => {
    const input = wrapper.find('input');
    const savings = wrapper.find('.calc__result__savings');

    expect(input.classes()).not.toContain('active');
    expect(savings.classes()).not.toContain('active');

    await input.trigger('click');

    expect(input.classes()).toContain('active');
    expect(savings.classes()).toContain('active');
  })
});