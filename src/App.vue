<template>
    <div id="app">
        <h1>
            Create Database &amp; User Guide
        </h1>
        <div>
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>USER NAME</label>
                        <b-input-group prepend="" class="mb-2 mr-sm-2 mb-sm-0">
                            <b-input v-model="userName"
                                     placeholder="Please fill Project Name"></b-input>
                        </b-input-group>
                    </div>
                    <div class="form-group">
                        <label>PASSWORD</label>
                        <b-form-input type="text" class="form-control" v-model="password"
                                      placeholder="Please fill your Password">
                        </b-form-input>
                    </div>
                    <div class="form-group">
                        <label>DATABASE NAME</label>
                        <b-form-input type="text" class="form-control" v-model="databaseName"
                                      placeholder="Please fill your Database name">
                        </b-form-input>
                    </div>
                </div>
            </div>
        </div>
        <b-card class="mt-3" header="Data Result">
            <pre class="m-0">
                CREATE USER &#39;{{userName}}&#39;@&#39;%&#39; IDENTIFIED BY &#39;{{password}}&#39;;
                -- Create Database
                CREATE DATABASE {{databaseName}} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
                -- Add Permission
                GRANT ALL PRIVILEGES ON {{databaseName}}.* TO &#39;{{userName}}&#39;@&#39;%&#39;;
                -- Reset Privileges
                FLUSH PRIVILEGES;
            </pre>
        </b-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userName: '',
                password: '',
                databaseName: ''
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
