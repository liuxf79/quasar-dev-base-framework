<template>
  <q-page class="full-width">
    <div class="q-pa-md">
      <q-form @submit="onSubmit" @reset="onReset">
        <q-list bordered class="q-pa-md">
          <q-expansion-item
            group="base"
            icon="info"
            label="填写商品基本信息"
            default-opened
            header-class="text-primary"
          >
            <q-item>
              <q-item-section>
                <q-item-label>
                  <q-icon name="store" color="accent" size="25px" />
                  选择库存类型 *
                </q-item-label>
                <q-btn-toggle
                  v-model="storeType"
                  spread
                  no-caps
                  toggle-color="secondary"
                  color="accent"
                  text-color="white"
                  :options="productOptions"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-input filled v-model="styleType" label="商品款号" hint="">
                  <template v-slot:prepend>
                    <q-icon name="bookmarks" />
                  </template>
                </q-input>
              </q-item-section>
              <q-item-section>
                <q-input
                  filled
                  v-model="productName"
                  label="商品名称 *"
                  lazy-rules
                  :rules="[val => (val && val.length > 0) || '请输入商品名称']"
                >
                  <template v-slot:prepend>
                    <q-icon name="card_giftcard" />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-select
                  filled
                  v-model="brandId"
                  :options="brandOptions"
                  label="商品品牌 *"
                  map-options
                  emit-value
                  lazy-rules
                  :rules="[val => (val && val > 0) || '请选择商品品牌']"
                  class="ellipsis"
                >
                  <template v-slot:prepend>
                    <q-icon name="picture_in_picture" />
                  </template>
                </q-select>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-select
                  filled
                  v-model="provider"
                  :options="providerOptions"
                  label="供应商 *"
                  map-options
                  emit-value
                  lazy-rules
                  :rules="[val => (val && val > 0) || '请选择供应商']"
                  class="ellipsis"
                >
                  <template v-slot:prepend>
                    <q-icon name="assignment_ind" />
                  </template>
                </q-select>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-select
                  filled
                  v-model="productMainType"
                  :options="mainTypeOptions"
                  label="商品一级分类 *"
                  map-options
                  emit-value
                  lazy-rules
                  :rules="[val => (val && val > 0) || '请选择商品一级分类']"
                  @input="changeSelectionType"
                  @popup-show="removeSubVal"
                  @remove="removeSubVal"
                  class="ellipsis"
                >
                  <template v-slot:prepend>
                    <q-icon name="category" />
                  </template>
                </q-select>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-select
                  filled
                  v-model="productSubType"
                  :options="subTypeOptions"
                  label="商品二级分类 *"
                  map-options
                  emit-value
                  lazy-rules
                  :rules="[val => (val && val > 0) || '请选择商品二级分类']"
                  class="ellipsis"
                >
                  <template v-slot:prepend>
                    <q-icon name="category" />
                  </template>
                </q-select>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>
                  <q-icon name="brightness_high" color="accent" size="25px" />
                  选择适用季节 *
                </q-item-label>
                <!-- <q-badge color="secondary">选择适用季节 *</q-badge> -->
                <q-btn-toggle
                  v-model="season"qua
                  spread
                  no-caps
                  toggle-color="secondary"
                  color="accent"
                  text-color="white"
                  :options="seasonOptions"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-select
                  filled
                  v-model="productYear"
                  :options="yearOptions"
                  label="商品年份 *"
                  map-options
                  emit-value
                  lazy-rules
                  :rules="[val => (val && val > 0) || '请选择商品年份']"
                  class="ellipsis"
                >
                  <template v-slot:prepend>
                    <q-icon name="date_range" />
                  </template>
                </q-select>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-input
                  filled
                  type="tel"
                  v-model="supportPrice"
                  suffix="元"
                  label="商品供货价 *"
                  lazy-rules
                  :rules="[val => (val && val > 0) || '请输入商品供货价']"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_money" />
                  </template>
                </q-input>
              </q-item-section>
              <q-item-section>
                <q-input
                  filled
                  type="tel"
                  v-model="marketPrice"
                  label="商品市场价 *"
                  lazy-rules
                  suffix="元"
                  :rules="[val => (val && val > 0) || '请输入商品市场价']"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_money" />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-input
                  filled
                  type="tel"
                  v-model="salePrice"
                  suffix="元"
                  label="商品销售价 *"
                  lazy-rules
                  :rules="[val => (val && val > 0) || '请输入商品供货价']"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_money" />
                  </template>
                </q-input>
              </q-item-section>
              <q-item-section>
                <q-input
                  filled
                  type="tel"
                  v-model="newSalePrice"
                  label="新品销售价 *"
                  lazy-rules
                  suffix="元"
                  :rules="[val => (val && val > 0) || '请输入商品市场价']"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_money" />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-select
                  filled
                  v-model="shareMode"
                  :options="[
                    { label: '依供货价分配', value: 1 },
                    { label: '依销售价分配（券前）', value: 2 }
                  ]"
                  label="商家收入分成模式 *"
                  map-options
                  emit-value
                  lazy-rules
                  :rules="[val => (val && val > 0) || '请选择收入分成模式']"
                  class="ellipsis"
                >
                  <template v-slot:prepend>
                    <q-icon name="assessment" />
                  </template>
                </q-select>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-input
                  filled
                  type="tel"
                  v-model="rebate"
                  suffix="%"
                  label="销售返点 *"
                  lazy-rules
                  :rules="[val => (val && val > 0) || '请输入销售返点']"
                >
                  <template v-slot:prepend>
                    <q-icon name="score" />
                  </template>
                </q-input>
              </q-item-section>
              <q-item-section>
                <q-input
                  filled
                  type="tel"
                  v-model="newRebate"
                  label="新品销售返点 *"
                  lazy-rules
                  suffix="%"
                  :rules="[val => (val && val > 0) || '请输入新品销售返点']"
                >
                  <template v-slot:prepend>
                    <q-icon name="score" />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            group="base"
            icon="wallpaper"
            label="上传商品图片信息"
            default-opened
            header-class="text-primary"
          >
            <q-item>
              <q-item-section>
                <q-uploader
                  label="添加商品图片信息(5M)"
                  multiple
                  accept=".jpg, image/*"
                  :max-file-size="5120000"
                  :hide-upload-btn="true"
                  :auto-upload="true"
                  url="http://localhost:3001/yi23/Home/Ajax/upload"
                  @uploaded="uploadedFiles"
                  @removed="removeFiles"
                  class="row self-center full-width"
                >
                  <template v-slot:list="scope">
                    <q-list separator>
                      <q-item
                        v-for="file in scope.files"
                        :key="file.name"
                        class="row justify-between items-center"
                      >
                        <q-item-section class="ellipsis">
                          <q-item-label>
                            {{ file.name }}
                          </q-item-label>

                          <q-item-label caption>
                            Status: {{ file.__status }}
                          </q-item-label>

                          <q-item-label caption>
                            {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                          </q-item-label>
                        </q-item-section>

                        <q-item-section thumbnail>
                          <img :src="file.__img.src" />
                        </q-item-section>

                        <q-item-section top side>
                          <q-btn
                            size="12px"
                            flat
                            dense
                            round
                            icon="delete"
                            @click="scope.removeFile(file)"
                          />
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </template>
                </q-uploader>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            group="base"
            icon="crop_rotate"
            label="填写商品尺码信息"
            default-opened
            header-class="text-primary"
          >
            <q-item>
              <q-item-section>
                <q-item-label>
                  <q-icon name="exposure" color="accent" size="25px" />
                  选择入库尺码 *
                </q-item-label>
                <q-option-group
                  v-model="skus"
                  :options="[
                    { label: 'S', value: 'S' },
                    { label: 'M', value: 'M' },
                    { label: 'L', value: 'L' }
                  ]"
                  type="toggle"
                  inline
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> 选择：{{ skus }} </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
        <div class="q-mt-md q-mb-xl">
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Yshop',
  data() {
    return {
      storeType: 1,
      styleType: null,
      productName: null,
      brandId: null,
      productMainType: null,
      productSubType: null,
      provider: null,
      season: 1,
      supportPrice: null,
      marketPrice: null,
      salePrice: null,
      newSalePrice: null,
      productYear: null,
      shareMode: null,
      rebate: null,
      newRebate: null,
      skus: [],
      yearOptions: [
        {
          label: '2015年',
          value: 2015
        },
        {
          label: '2016年',
          value: 2016
        },
        {
          label: '2017年',
          value: 2017
        },
        {
          label: '2018年',
          value: 2018
        },
        {
          label: '2019年',
          value: 2019
        },
        {
          label: '2020年',
          value: 2020
        }
      ],
      seasonOptions: [
        {
          label: '春季',
          value: 1
        },
        {
          label: '夏季',
          value: 2
        },
        {
          label: '秋季',
          value: 3
        },
        {
          label: '冬季',
          value: 4
        }
      ],
      mainTypeOptions: [
        {
          label: '美妆护肤',
          value: 1,
          subTypeOptions: [
            {
              label: '美甲产品',
              value: 4
            },
            {
              label: '护手霜',
              value: 5
            },
            {
              label: '润唇膏',
              value: 6
            }
          ]
        },
        {
          label: '家居/生活方式',
          value: 2,
          subTypeOptions: [
            {
              label: '眼罩',
              value: 7
            },
            {
              label: '枕套',
              value: 8
            },
            {
              label: '花瓶',
              value: 9
            }
          ]
        },
        {
          label: '配饰',
          value: 3,
          subTypeOptions: [
            {
              label: '连体裤袜',
              value: 10
            },
            {
              label: '围巾',
              value: 11
            },
            {
              label: '箱包',
              value: 12
            }
          ]
        }
      ],
      subTypeOptions: [],
      productOptions: [
        { label: '直发', value: 1 },
        { label: '入库', value: 2 }
      ],
      providerOptions: [
        {
          label: '上海俗缘服饰有限公司',
          value: 1
        },
        {
          label: '深圳市格兰妮服饰有限公司d的点点滴滴多多多多多多',
          value: 2
        }
      ],
      brandOptions: Object.freeze([
        {
          label: '+xinzhan',
          value: 1
        },
        {
          label: 'Alex Wang',
          value: 2
        },
        {
          label: 'Alexander Wang',
          value: 3
        },
        {
          label: 'Adidas',
          value: 4
        },
        {
          label: 'a-morir',
          value: 5
        }
      ])
    };
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: `填写信息：productType:${this.productType}
        styleType:${this.styleType}
        productName:${this.productName}
        brandId:${this.brandId}
        productMainType:${this.productMainType},
        productSubType:${this.productSubType}
        provider:${this.provider}`
      });
    },
    onReset() {
      this.productType = 1;
      this.styleType = null;
      this.productName = null;
      this.brandId = null;
      this.productMainType = null;
      this.productSubType = null;
      this.subTypeOptions = [];
      this.provider = null;
    },
    removeSubVal() {
      this.productSubType = null;
      this.subTypeOptions = [];
    },
    changeSelectionType(inputValue) {
      const subItem = this.mainTypeOptions.filter(
        item => item.value == inputValue
      );
      this.subTypeOptions = subItem[0].subTypeOptions || [];
    },
    uploadedFiles(info) {
      //获取上传后地址后，以filename为key添加到数组
      const parse = JSON.parse(info.xhr.response);
      console.log(info, 'uploaded');
      console.log(parse, typeof parse, 'response');
    },
    removeFiles(file) {
      //删除后，从上传file地址数组中删除
      console.log(file, 'this is remove');
    }
  }
};
</script>

<style lang="stylus" scoped></style>
