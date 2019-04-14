<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
    import {AddressEdit} from  'vant'
    export default {
        name: "home",
        components: {
            [AddressEdit.name]:AddressEdit
        },
        data() {
            return {
                areaList,
                searchResult: []
            }
        }
    };
</script>